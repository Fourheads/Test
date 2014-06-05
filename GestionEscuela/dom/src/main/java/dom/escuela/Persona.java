package dom.escuela;

import java.util.Date;

public class Persona {
	
	
	private int dni;
	public int getDni() {
		return dni;
	}
	public void setDni(int dni) {
		this.dni = dni;
	}
	
		
	private String apellido;
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	
		
	private String nombre;
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
	private Direccion direccion;
	public Direccion getDireccion() {
		return direccion;
	}
	public void setDireccion(Direccion direccion) {
		this.direccion = direccion;
	}
	
	
	private Date fechadeNacimiento;
	public Date getFechadeNacimiento() {
		return fechadeNacimiento;
	}
	public void setFechadeNacimiento(Date fechadeNacimiento) {
		this.fechadeNacimiento = fechadeNacimiento;
	}
	
	
	private String nacionalidad;
	public String getNacionalidad() {
		return nacionalidad;
	}
	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}
	
	
	private String sexo;
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	
	
	private int telefono;	
	public int getTelefono() {
		return telefono;
	}
	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}
		
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + dni;
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Persona other = (Persona) obj;
		if (dni != other.dni)
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Persona [dni=" + dni + ", apellido=" + apellido + ", nombre="
				+ nombre + ", direccion=" + direccion + ", fechadeNacimiento="
				+ fechadeNacimiento + ", nacionalidad=" + nacionalidad
				+ ", sexo=" + sexo + ", telefono=" + telefono + "]";
	}
	
}
