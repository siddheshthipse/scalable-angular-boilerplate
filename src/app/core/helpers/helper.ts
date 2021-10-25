import * as _ from 'lodash';

import exportFromJSON from 'export-from-json';



export function JsonReducer(data: any, rule: any) {

  function recurse(nodes: any, rules: any, path: any): any {

    var res = {};

    return _.map(nodes, function (node) {

      rules.forEach((rule: any) => {

        if (rule.isParent) {

          let key = rule.id;

          let subkey: any = rule.subfield;

          node[key] = node[key][subkey];

        }

      });

      return node;

    });

  }

  return _.flattenDeep(recurse(data, rule, []));

}

export function ExportCsv(data: any, fileName: any) {

  const exportType = exportFromJSON.types.csv;



  exportFromJSON({ data, fileName, exportType });
}