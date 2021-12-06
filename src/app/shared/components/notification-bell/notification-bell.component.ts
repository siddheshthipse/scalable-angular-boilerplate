import { Component, OnInit } from '@angular/core';
import {
  NoticeIconList,
  NoticeIconSelect,
  NoticeItem,
} from '@delon/abc/notice-icon';
import { add, formatDistanceToNow, parse } from 'date-fns';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.css'],
})
export class NotificationBellComponent implements OnInit {
  previousNotifications: any[] | any;
  data: NoticeItem[] | any;
  count: number | any;
  loading: boolean = false;

  socketObj:any;
  apiURL= environment.NODE_SERVER_URL;

  constructor(private msg: NzMessageService, private nzI18n: NzI18nService) {}

  ngOnInit(): void {
    console.log('Notification Socket');
    this.socketObj=io(this.apiURL);
    this.socketObj.on('pushnotification', (data: string) => {
      console.log(data);
      this.addNotification(data);
    });

    //The Upper Title
    this.data = [
      {
        title: 'General',
        list: [],
        emptyText: '你已查看所有通知',
        emptyImage:
          'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
        clearText: 'Clear all',
      },
      {
        title: 'Work Items',
        list: [],
        emptyText: '您已读完所有消息',
        emptyImage:
          'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
        clearText: '清空消息',
      },
      {
        title: 'Events',
        list: [],
        emptyText: '你已完成所有待办',
        emptyImage:
          'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
        clearText: '清空待办',
      },
    ];

    //Actual Notification
    this.previousNotifications = [
      {
        id: '000000001',
        title: 'Nivedha V sent you a message',
        datetime: new Date(),
        type: 'General',
      },
      {
        id: '000000002',
        title: 'Avinash Singh is connected on Messenger',
        datetime: new Date(),
        type: 'General',
      },
      {
        id: '000000003',
        title: 'John assigned you a Task',
        datetime: new Date(),
        read: true,
        type: 'General',
      },
      {
        id: '000000005',
        title: '12 drafts need your attention',
        datetime: '2017-08-07',
        type: 'General',
      },
      {
        id: '000000006',
        title: 'Manish Gawali',
        description: 'Hey Siddhesh, hope you are doing good',
        datetime: '2017-08-07',
        type: 'Work Items',
      },
      {
        id: '000000007',
        title: 'Pranav Musale',
        description: 'My weddings on 29, I want you there',
        datetime: '2017-08-07',
        type: 'Work Items',
      },
      {
        id: '000000008',
        title: 'Sanket Dhawale',
        description: 'Currently preparing for MPSC staying in Pune as of now',
        datetime: '2017-08-07',
        type: 'Work Items',
      },
      {
        id: '000000009',
        title: 'Some title',
        description: 'Some random big description',
        extra: 'Some extra sauce',
        status: 'todo',
        type: 'Events',
      },
      {
        id: '000000010',
        title: 'Some tiltilating title',
        description: 'Bomb will go off at 9:30 pm today',
        extra: 'Some extra French Fries',
        status: 'urgent',
        type: 'Events',
      },
      {
        id: '000000011',
        title: 'Another boring title',
        description:
          'Why do you want to read this description go read some novels',
        extra: 'Give me some extra burgers',
        status: 'doing',
        type: 'Events',
      },
      {
        id: '000000012',
        title: 'The last one',
        description:
          'I am not doing this thing again ever, this ones was the last',
        extra: 'Give me sone extra rest',
        status: 'processing',
        type: 'Events',
      },
    ];

    this.count = this.previousNotifications.length;  
  }

  updateNoticeData(notices: NoticeIconList[]): NoticeItem[] {
    const data = this.data.slice();
    data.forEach((i: any) => (i.list = []));

    notices.forEach((item) => {
      const newItem = { ...item };
      if (typeof newItem.datetime === 'string') {
        newItem.datetime = parse(newItem.datetime, 'yyyy-MM-dd', new Date());
      }
      if (newItem.datetime) {
        newItem.datetime = formatDistanceToNow(newItem.datetime as Date, {
          locale: this.nzI18n.getDateLocale(),
        });
      }
      if (newItem.extra && newItem.status) {
        newItem.color = (
          {
            todo: undefined,
            processing: 'blue',
            urgent: 'red',
            doing: 'gold',
          } as { [key: string]: string | undefined }
        )[newItem.status];
      }
      data.find((w: any) => w.title === newItem.type)!.list.push(newItem);
    });
    console.log(data);
    return data;
  }

  loadData(): void {
    if (this.loading) return;
    this.loading = true;
    setTimeout(() => {
      this.data = this.updateNoticeData(this.previousNotifications);
      this.loading = false;
    }, 500);
  }

  clear(type: string): void {
    this.msg.success(`清空了 ${type}`);
  }

  select(res: NoticeIconSelect): void {
    this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
  }

  showOK(): void {
    this.msg.info(`ok`);
  }

  addNotification(newNotification:any) {
    this.previousNotifications?.push(newNotification);

    this.count = this.count + 1;
  }
}
