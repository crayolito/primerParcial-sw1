/*! JointJS+ v4.0.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2024 client IO

 2024-09-07


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/

export const sampleGraphs = {
  // credit goes to `http://www.continuitycentral.com/`
  emergencyProcedure: `
{
  "cells": [
    {
      "type": "standard.HeaderedRectangle",
      "position": {
        "x": 30,
        "y": 30
      },
      "size": {
        "width": 190,
        "height": 110
      },
      "angle": 0,
      "id": "tablaCliente",
      "z": 1,
      "attrs": {
        "root": {
          "dataTooltipPosition": "left",
          "dataTooltipPositionSelector": ".joint-stencil"
        },
        "body": {
          "stroke": "#31d0c6",
          "fill": "transparent",
          "strokeDasharray": "0"
        },
        "header": {
          "height": 20,
          "stroke": "#31d0c6",
          "fill": "#31d0c6",
          "strokeDasharray": "0"
        },
        "headerText": {
          "y": 10,
          "fontSize": 11,
          "fill": "#f6f6f6",
          "text": "cliente",
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        },
        "bodyText": {
          "y": "calc(h/2 + 10)",
          "fontSize": 11,
          "fill": "#c6c7e2",
          "textWrap": {
            "text": "- id : int pk\\n- edad : int \\n- genero : varchar(200)\\n- peso : decimal\\n- altura : decimal\\n- telefono : int",
            "width": -10,
            "height": -20,
            "ellipsis": true
          },
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        }
      }
    },
    {
      "type": "standard.HeaderedRectangle",
      "position": {
        "x": 30,
        "y": 170
      },
      "size": {
        "width": 170,
        "height": 100
      },
      "angle": 0,
      "id": "tablaPlanPer",
      "z": 2,
      "attrs": {
        "root": {
          "dataTooltipPosition": "left",
          "dataTooltipPositionSelector": ".joint-stencil"
        },
        "body": {
          "stroke": "#31d0c6",
          "fill": "transparent",
          "strokeDasharray": "0"
        },
        "header": {
          "height": 20,
          "stroke": "#31d0c6",
          "fill": "#31d0c6",
          "strokeDasharray": "0"
        },
        "headerText": {
          "y": 10,
          "fontSize": 11,
          "fill": "#f6f6f6",
          "text": "planPer",
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        },
        "bodyText": {
          "y": "calc(h/2 + 10)",
          "fontSize": 11,
          "fill": "#c6c7e2",
          "textWrap": {
            "text": "- id : int pk\\n- planDieta_id : int fk",
            "width": -10,
            "height": -20,
            "ellipsis": true
          },
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        }
      }
    },
    {
      "type": "standard.HeaderedRectangle",
      "position": {
        "x": 300,
        "y": 130
      },
      "size": {
        "width": 170,
        "height": 100
      },
      "angle": 0,
      "id": "tablaPlanRutina",
      "z": 3,
      "attrs": {
        "root": {
          "dataTooltipPosition": "left",
          "dataTooltipPositionSelector": ".joint-stencil"
        },
        "body": {
          "stroke": "#feb663",
          "fill": "transparent",
          "strokeDasharray": "0"
        },
        "header": {
          "height": 20,
          "stroke": "#feb663",
          "fill": "#feb663",
          "strokeDasharray": "0"
        },
        "headerText": {
          "y": 10,
          "fontSize": 11,
          "fill": "#f6f6f6",
          "text": "planRutina",
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        },
        "bodyText": {
          "y": "calc(h/2 + 10)",
          "fontSize": 11,
          "fill": "#c6c7e2",
          "textWrap": {
            "text": "- id : int pk\\n- planPer_id : int fk\\n- rutinaEjer_id : int fk",
            "width": -10,
            "height": -20,
            "ellipsis": true
          },
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        }
      }
    },
    {
      "type": "app.Link",
      "router": {
        "name": "normal"
      },
      "connector": {
        "name": "rounded"
      },
      "labels": [
        {
          "attrs": {
            "text": {
              "text": "0...*",
              "fill": "#f6f6f6"
            },
            "rect": {
              "fill": null,
              "stroke": null
            }
          },
          "position": 0.5
        }
      ],
      "source": {
        "id": "tablaPlanPer"
      },
      "target": {
        "id": "tablaPlanRutina"
      },
      "id": "link_startTablaPlanPer_endTablaPlanRutina",
      "z": 4,
      "vertices": [],
      "attrs": {
        "line": {
          "targetMarker": {
            "d": "M 0 0 0 0"
          }
        }
      }
    },
    {
      "type": "standard.HeaderedRectangle",
      "position": {
        "x": 560,
        "y": 100
      },
      "size": {
        "width": 170,
        "height": 100
      },
      "angle": 0,
      "id": "tablaRutinaEjer",
      "z": 5,
      "attrs": {
        "root": {
          "dataTooltipPosition": "left",
          "dataTooltipPositionSelector": ".joint-stencil"
        },
        "body": {
          "stroke": "#31d0c6",
          "fill": "transparent",
          "strokeDasharray": "0"
        },
        "header": {
          "height": 20,
          "stroke": "#31d0c6",
          "fill": "#31d0c6",
          "strokeDasharray": "0"
        },
        "headerText": {
          "y": 10,
          "fontSize": 11,
          "fill": "#f6f6f6",
          "text": "rutinaEjer",
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        },
        "bodyText": {
          "y": "calc(h/2 + 10)",
          "fontSize": 11,
          "fill": "#c6c7e2",
          "textWrap": {
            "text": "- id : int pk\\n- nombre : text\\n- explicacion: text\\n- video : varchar(200)\\n- ejecucion : text",
            "width": -10,
            "height": -20,
            "ellipsis": true
          },
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        }
      }
    },
    {
      "type": "app.Link",
      "router": {
        "name": "normal"
      },
      "connector": {
        "name": "rounded"
      },
      "labels": [
        {
          "attrs": {
            "text": {
              "text": "1...*",
              "fill": "#f6f6f6"
            },
            "rect": {
              "fill": null,
              "stroke": null
            }
          },
          "position": 0.5
        }
      ],
      "source": {
        "id": "tablaRutinaEjer"
      },
      "target": {
        "id": "tablaPlanRutina"
      },
      "id": "link_startTablaRutinaEjer_endTablaPlanRutina",
      "z": 6,
      "vertices": [],
      "attrs": {
        "line": {
          "targetMarker": {
            "d": "M 0 0 0 0"
          }
        }
      }
    },
    {
      "type": "standard.HeaderedRectangle",
      "position": {
        "x": 620,
        "y": 310
      },
      "size": {
        "width": 170,
        "height": 100
      },
      "angle": 0,
      "id": "tablaRutinaCategoria",
      "z": 8,
      "attrs": {
        "root": {
          "dataTooltipPosition": "left",
          "dataTooltipPositionSelector": ".joint-stencil"
        },
        "body": {
          "stroke": "#feb663",
          "fill": "transparent",
          "strokeDasharray": "0"
        },
        "header": {
          "height": 20,
          "stroke": "#feb663",
          "fill": "#feb663",
          "strokeDasharray": "0"
        },
        "headerText": {
          "y": 10,
          "fontSize": 11,
          "fill": "#f6f6f6",
          "text": "rutina_categoria",
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        },
        "bodyText": {
          "y": "calc(h/2 + 10)",
          "fontSize": 11,
          "fill": "#c6c7e2",
          "textWrap": {
            "text": "- id : int pk\\n- rutinaEjer_id : int fk\\n- categoriaEjer_id : int fk",
            "width": -10,
            "height": -20,
            "ellipsis": true
          },
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        }
      }
    },
    {
      "type": "app.Link",
      "router": {
        "name": "normal"
      },
      "connector": {
        "name": "rounded"
      },
      "labels": [
        {
          "attrs": {
            "text": {
              "text": "0...*",
              "fill": "#f6f6f6"
            },
            "rect": {
              "fill": null,
              "stroke": null
            }
          },
          "position": 0.5
        }
      ],
      "source": {
        "id": "tablaRutinaEjer",
        "anchor": {
          "name": "topLeft",
          "args": {
            "dx": "85.294%",
            "dy": "43.762%",
            "rotate": true
          }
        }
      },
      "target": {
        "id": "tablaRutinaCategoria"
      },
      "id": "link_starTablaRutinaEjer_endTablaRutinaCategoria",
      "z": 10,
      "attrs": {
        "line": {
          "targetMarker": {
            "d": "M 0 0 0 0",
            "fill": null
          }
        }
      }
    },
    {
      "type": "standard.HeaderedRectangle",
      "position": {
        "x": 790,
        "y": 90
      },
      "size": {
        "width": 170,
        "height": 100
      },
      "angle": 0,
      "id": "tablaCategoriaEjer",
      "z": 11,
      "attrs": {
        "root": {
          "dataTooltipPosition": "left",
          "dataTooltipPositionSelector": ".joint-stencil"
        },
        "body": {
          "stroke": "#31d0c6",
          "fill": "transparent",
          "strokeDasharray": "0"
        },
        "header": {
          "height": 20,
          "stroke": "#31d0c6",
          "fill": "#31d0c6",
          "strokeDasharray": "0"
        },
        "headerText": {
          "y": 10,
          "fontSize": 11,
          "fill": "#f6f6f6",
          "text": "categoriaEjer",
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        },
        "bodyText": {
          "y": "calc(h/2 + 10)",
          "fontSize": 11,
          "fill": "#c6c7e2",
          "textWrap": {
            "text": "- id : int pk\\n- descripcion : text",
            "width": -10,
            "height": -20,
            "ellipsis": true
          },
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        }
      }
    },
    {
      "type": "app.Link",
      "router": {
        "name": "normal"
      },
      "connector": {
        "name": "rounded"
      },
      "labels": [
        {
          "attrs": {
            "text": {
              "text": "1...*",
              "fill": "#f6f6f6"
            },
            "rect": {
              "fill": null,
              "stroke": null
            }
          },
          "position": 0.5
        }
      ],
      "source": {
        "id": "tablaCategoriaEjer"
      },
      "target": {
        "id": "tablaRutinaCategoria"
      },
      "id": "link_startTablaCategoriaEjer_endTablaRutinaCategoria",
      "z": 12,
      "vertices": [],
      "attrs": {
        "line": {
          "targetMarker": {
            "d": "M 0 0 0 0"
          }
        }
      }
    },
    {
      "type": "standard.HeaderedRectangle",
      "position": {
        "x": 130,
        "y": 390
      },
      "size": {
        "width": 170,
        "height": 100
      },
      "angle": 0,
      "id": "tablaPlanDieta",
      "z": 13,
      "attrs": {
        "root": {
          "dataTooltipPosition": "left",
          "dataTooltipPositionSelector": ".joint-stencil"
        },
        "body": {
          "stroke": "#31d0c6",
          "fill": "transparent",
          "strokeDasharray": "0"
        },
        "header": {
          "height": 20,
          "stroke": "#31d0c6",
          "fill": "#31d0c6",
          "strokeDasharray": "0"
        },
        "headerText": {
          "y": 10,
          "fontSize": 11,
          "fill": "#f6f6f6",
          "text": "planDieta",
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        },
        "bodyText": {
          "y": "calc(h/2 + 10)",
          "fontSize": 11,
          "fill": "#c6c7e2",
          "textWrap": {
            "text": "- id : int pk\\n- nombre : text\\n- descripcion : text\\n- procesado : text\\n- noprocesado : text",
            "width": -10,
            "height": -20,
            "ellipsis": true
          },
          "fontFamily": "Averia Libre",
          "fontWeight": "Bold",
          "strokeWidth": 0
        }
      }
    },
    {
      "type": "app.Link",
      "router": {
        "name": "normal"
      },
      "connector": {
        "name": "rounded"
      },
      "labels": [
        {
          "attrs": {
            "text": {
              "text": "0...1",
              "fill": "#f6f6f6"
            },
            "rect": {
              "fill": null,
              "stroke": null
            }
          },
          "position": {
            "distance": 0.11811492265627795,
            "offset": 0,
            "angle": 0
          }
        },
        {
          "attrs": {
            "text": {
              "text": "1...1",
              "fill": "#f6f6f6"
            },
            "rect": {
              "fill": null,
              "stroke": null
            }
          },
          "position": {
            "distance": 0.8758873357985885,
            "offset": -1.884674072265625,
            "angle": 0
          }
        }
      ],
      "source": {
        "id": "tablaPlanPer",
        "anchor": {
          "name": "topLeft",
          "args": {
            "dx": "23.529%",
            "dy": "54.512%",
            "rotate": true
          }
        }
      },
      "target": {
        "id": "tablaPlanDieta"
      },
      "id": "link_startTablaPlanPer_endTablaPlanDieta",
      "z": 14,
      "vertices": [],
      "attrs": {
        "line": {
          "targetMarker": {
            "d": "M 0 0 0 0",
            "fill": null
          }
        }
      }
    }
  ]
}

    `,
};
