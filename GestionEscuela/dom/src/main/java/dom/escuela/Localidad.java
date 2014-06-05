package dom.escuela;

public class Localidad {

	private int codigoPostal;
	public int getCodigoPostal() {
		return codigoPostal;
	}
	public void setCodigoPostal(int codigoPostal) {
		this.codigoPostal = codigoPostal;
	}	
	
	
	private String nombre;	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + codigoPostal;
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
		Localidad other = (Localidad) obj;
		if (codigoPostal != other.codigoPostal)
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Localidad [codigoPostal=" + codigoPostal + ", nombre=" + nombre
				+ "]";
	}
}
