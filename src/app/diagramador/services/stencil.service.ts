/*! JointJS+ v4.0.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2024 client IO

 2024-09-07


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/

import { dia, ui } from '@joint/plus';
import * as appShapes from '../shapes/app-shapes';

export class StencilService {
  stencil: ui.Stencil;

  create(paperScroller: ui.PaperScroller, snaplines: ui.Snaplines) {
    this.stencil = new ui.Stencil({
      paper: paperScroller,
      snaplines: snaplines,
      width: 240,
      groups: this.getStencilGroups(),
      dropAnimation: true,
      groupsToggleButtons: true,
      paperOptions: function () {
        return {
          model: new dia.Graph(
            {},
            {
              cellNamespace: appShapes,
            }
          ),
          cellViewNamespace: appShapes,
        };
      },
      // search: {
      //   '*': ['type', 'attrs/root/dataTooltip', 'attrs/label/text'],
      // },
      layout: {
        columns: 1,
        marginX: 20,
        marginY: 10,
        // columnGap: 10,
        // columnWidth: 100,
        rowHeight: 120,
      },
      // Remove tooltip definition from clone
      dragStartClone: (cell: dia.Cell) =>
        cell.clone().removeAttr('root/dataTooltip'),
    });
  }

  setShapes() {
    this.stencil.load(this.getStencilShapes());
  }

  getStencilGroups() {
    return <{ [key: string]: ui.Stencil.Group }>{
      standard: { index: 1, label: 'Clases de Trabajo' },
    };
  }

  getStencilShapes() {
    return {
      standard: [
        {
          type: 'standard.HeaderedRectangle',
          size: { width: 200, height: 100 },
          attrs: {
            root: {
              dataTooltip: 'Rectangle with header',
              dataTooltipPosition: 'left',
              dataTooltipPositionSelector: '.joint-stencil',
            },
            body: {
              fill: 'transparent',
              stroke: '#31d0c6',
              strokeWidth: 2,
              strokeDasharray: '0',
            },
            header: {
              stroke: '#31d0c6',
              fill: '#31d0c6',
              strokeWidth: 2,
              strokeDasharray: '0',
              height: 20,
            },
            bodyText: {
              textWrap: {
                text: '- atributo1 : valor1\n- atributo2 : valor2\n- atributo3 : valor3\n- atributo4 : valor4',
                width: -10,
                height: -20,
                ellipsis: true,
              },
              fill: '#c6c7e2',
              fontFamily: 'Averia Libre',
              fontWeight: 'Bold',
              fontSize: 11,
              strokeWidth: 0,
              y: 'calc(h/2 + 10)',
            },
            headerText: {
              text: 'tituloClase',
              fill: '#f6f6f6',
              fontFamily: 'Averia Libre',
              fontWeight: 'Bold',
              fontSize: 11,
              strokeWidth: 0,
              y: 10,
            },
          },
        },
        {
          type: 'standard.HeaderedRectangle',
          size: { width: 200, height: 100 },
          attrs: {
            root: {
              dataTooltip: 'Rectangle with header',
              dataTooltipPosition: 'left',
              dataTooltipPositionSelector: '.joint-stencil',
            },
            body: {
              fill: 'transparent',
              stroke: '#feb663',
              strokeWidth: 2,
              strokeDasharray: '0',
            },
            header: {
              stroke: '#feb663',
              fill: '#feb663',
              strokeWidth: 2,
              strokeDasharray: '0',
              height: 20,
            },
            bodyText: {
              textWrap: {
                text: '- atributo1 : valor1\n- atributo2 : valor2\n- atributo3 : valor3\n- atributo4 : valor4',
                width: -10,
                height: -20,
                ellipsis: true,
              },
              fill: '#c6c7e2',
              fontFamily: 'Averia Libre',
              fontWeight: 'Bold',
              fontSize: 11,
              strokeWidth: 0,
              y: 'calc(h/2 + 10)',
            },
            headerText: {
              text: 'tituloClase1_tituloClase2',
              fill: '#000000',
              fontFamily: 'Averia Libre',
              fontWeight: 'Bold',
              fontSize: 11,
              strokeWidth: 0,
              y: 10,
            },
          },
        },
      ],
    };
  }
}
