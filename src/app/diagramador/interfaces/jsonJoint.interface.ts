export interface ElementoClase {
  id: string;
  titulo: string;
  posicion: number[];
  size: number[];
  atributos: AtributoClase[];
  // LOGIC : #feb663 = Clase Intermedia , #31d0c6 = Clase Normal
  color: string;
}

export interface ElementoLink {
  id: string;
  origen: ElementoCabezera;
  destino: ElementoCabezera;
  // LOGIC : 1 LINK CLASE INTERMEDIA , 2 LINK CLASE NORMAL
  // LOGIC : 1 ATRIBUTO = 0.5 , 2 ATRIBUTOS = [0.2,0.8]
  // LOGIC : 1 ATRIBUTO = ORIGEN , 2 ATRIBUTOS = DESTINO
  atributos: string[];
}

export interface ElementoCabezera {
  id: string;
  // LOGIC : ASOCIACION = 'M 0 0 0 0'
  // LOGIC : COMPOSICION = 'M -10 0 0 10 10 0 0 -10 z'
  // LOGIC : AGREGACION = 'M 0 -10 15 0 0 10 z'
  // LOGIC : GENERALIZACION = 'M 0 -10 -15 0 0 10 z'
  tipo: string;
  normal: string;
}

export interface AtributoClase {
  id: string;
  titulo: string;
}

export interface DetalleClaseIntermedia {
  claseNormal: ElementoClase;
  link: ElementoLink;
  claseIntermedia: ElementoClase;
}

export interface ConnectorXML {
  id: string;
  origen: string;
  destino: string;
  // LOGIC: aggregation
  destinoType: string;
  // LOGIC: ea_type
  properties: string;
  // LOGIC: extendedProperties => associationClass
  intermedia: string;
}
