create database Diagrama;
use Diagrama;

create table Alumno( 
 ci integer,
 nombre varchar(255),
 registro varchar(255),
 primary key(ci),
 GrupoInvestigacion_nroGrupo integer,
 FOREIGN KEY (GrupoInvestigacion_nroGrupo) REFERENCES GrupoInvestigacion(nroGrupo) ON DELETE CASCADE ON UPDATE CASCADE
);
create table ProyectoGrado( 
 numero integer,
 tema varchar(255),
 fechaInicio Date,
 primary key(numero),
 Alumno_ci integer,
 FOREIGN KEY (Alumno_ci) REFERENCES Alumno(ci) ON DELETE CASCADE ON UPDATE CASCADE,
 Docente_ci integer,
 FOREIGN KEY (Docente_ci) REFERENCES Docente(ci) ON DELETE CASCADE ON UPDATE CASCADE
);
create table GrupoInvestigacion( 
 nroGrupo integer,
 nombre varchar(255),
 nroComponentes integer,
 primary key(nroGrupo)
);
create table Docente( 
 ci integer,
 nombre varchar(255),
 domicilio varchar(255),
 primary key(ci)
);
create table Tribunal( 
 nroTribunal integer,
 lugar varchar(255),
 fechaDefensa Date,
 primary key(nroTribunal),
 ProyectoGrado_numero integer,
 FOREIGN KEY (ProyectoGrado_numero) REFERENCES ProyectoGrado(numero) ON DELETE CASCADE ON UPDATE CASCADE
);
