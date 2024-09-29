/*! JointJS+ v4.0.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2024 client IO

 2024-09-07


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/

import * as joint from '@joint/plus';

export class ToolbarService {
  toolbar: joint.ui.Toolbar;

  create(
    commandManager: joint.dia.CommandManager,
    paperScroller: joint.ui.PaperScroller
  ) {
    const { tools, groups } = this.getToolbarConfig();

    this.toolbar = new joint.ui.Toolbar({
      groups,
      tools,
      autoToggle: true,
      references: {
        paperScroller: paperScroller,
        commandManager: commandManager,
      },
    });
  }

  getToolbarConfig() {
    return {
      groups: {
        clear: { index: 1 },
        qr: { index: 2 },
        springBoot: { index: 3 },
        xmlImportar: { index: 4 },
        xmlExportar: { index: 5 },
        jsonImportar: { index: 6 },
        jsonExportar: { index: 7 },
        importar: { index: 8 },
        fullscreen: { index: 9 },
        order: { index: 10 },
        layout: { index: 11 },
        zoom: { index: 12 },
        grid: { index: 13 },
        snapline: { index: 14 },
      },
      tools: [
        {
          type: 'button',
          name: 'clear',
          group: 'clear',
          attrs: {
            button: {
              id: 'btn-clear',
              'data-tooltip': 'Clear Paper',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'button',
          name: 'qr',
          group: 'qr',
          text: 'QR',
          attrs: {
            button: {
              id: 'btn-qr',
              'data-tooltip': '.qr',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'button',
          name: 'jsonExportar',
          group: 'jsonExportar',
          text: 'Export JSON',
          attrs: {
            button: {
              id: 'btn-export-json',
              'data-tooltip': '.json',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'button',
          name: 'jsonImportar',
          group: 'jsonImportar',
          text: 'Importar JSON',
          attrs: {
            button: {
              id: 'btn-importar-json',
              'data-tooltip': '.json',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'button',
          name: 'xmlExportar',
          group: 'xmlExportar',
          text: 'Export XML',
          attrs: {
            button: {
              id: 'btn-export-xml',
              'data-tooltip': '.xml',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'button',
          name: 'xmlImportar',
          group: 'xmlImportar',
          text: 'Importar XML',
          attrs: {
            button: {
              id: 'btn-importar-xml',
              'data-tooltip': '.xml',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'button',
          name: 'springBoot',
          group: 'springBoot',
          text: 'Spring Boot',
          attrs: {
            button: {
              id: 'btn-springBoot',
              'data-tooltip': 'Generar Backend Spring Boot',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'zoom-to-fit',
          name: 'zoom-to-fit',
          group: 'zoom',
          attrs: {
            button: {
              'data-tooltip': 'Zoom To Fit',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'zoom-out',
          name: 'zoom-out',
          group: 'zoom',
          attrs: {
            button: {
              'data-tooltip': 'Zoom Out',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'label',
          name: 'zoom-slider-label',
          group: 'zoom',
          text: 'Zoom:',
        },
        {
          type: 'zoom-slider',
          name: 'zoom-slider',
          group: 'zoom',
        },
        {
          type: 'zoom-in',
          name: 'zoom-in',
          group: 'zoom',
          attrs: {
            button: {
              'data-tooltip': 'Zoom In',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'separator',
          group: 'grid',
        },
        {
          type: 'label',
          name: 'grid-size-label',
          group: 'grid',
          text: 'Grid size:',
          attrs: {
            label: {
              'data-tooltip': 'Change Grid Size',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'range',
          name: 'grid-size',
          group: 'grid',
          text: 'Grid size:',
          min: 1,
          max: 50,
          step: 1,
          value: 10,
        },
        {
          type: 'separator',
          group: 'snapline',
        },
        {
          type: 'checkbox',
          name: 'snapline',
          group: 'snapline',
          label: 'Snaplines:',
          value: true,
          attrs: {
            input: {
              id: 'snapline-switch',
            },
            label: {
              'data-tooltip': 'Enable/Disable Snaplines',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
        {
          type: 'fullscreen',
          name: 'fullscreen',
          group: 'fullscreen',
          attrs: {
            button: {
              'data-tooltip': 'Toggle Fullscreen Mode',
              'data-tooltip-position': 'top',
              'data-tooltip-position-selector': '.toolbar-container',
            },
          },
        },
      ],
    };
  }
}
