package dom.escuela;

	// ASÍ SE SUPONE QUE QUEDARÍA LICENCIADA CADA CLASE. 
	// EN LA PRIMER LÍNEA TENEMOS QUE PONER UNA BREVE DESCRIPCIÓN DEL PROYECTO. 
	/*  
	GestiónEscuela, management software for schools. 
    Copyright (C) 2014, Fourheads.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
    */
	

public class Alumno extends Persona{

		
	private Legajo legajo;
	
	@javax.jdo.annotations.Column(allowsNull="false", length=10)
	public Legajo getLegajo() {
		return legajo;
	}
	public void setLegajo(Legajo legajo) {
		this.legajo = legajo;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((legajo == null) ? 0 : legajo.hashCode());
		return result;
	}
	
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Alumno other = (Alumno) obj;
		if (legajo == null) {
			if (other.legajo != null)
				return false;
		} else if (!legajo.equals(other.legajo))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Alumno [legajo=" + legajo + ", getDni()=" + getDni()
				+ ", getApellido()=" + getApellido() + ", getNombre()="
				+ getNombre() + ", getDireccion()=" + getDireccion()
				+ ", getFechadeNacimiento()=" + getFechadeNacimiento()
				+ ", getNacionalidad()=" + getNacionalidad() + ", getSexo()="
				+ getSexo() + ", getTelefono()=" + getTelefono()
				+ ", toString()=" + super.toString() + ", getClass()="
				+ getClass() + "]";
	}
}
