package dom.escuela;

public class Direccion {

	private String calle;	
	public String getCalle() {
		return calle;
	}
	public void setCalle(String calle) {
		this.calle = calle;
	}
	
	
	private int numero;	
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	
	
	private int piso;
	public int getPiso() {
		return piso;
	}
	public void setPiso(int piso) {
		this.piso = piso;
	}
	
	
	
	private char departamento; //Si es un edificio tiene que haber piso y departamento (1,3,A,C)
	public char getDepartamento() {
		return departamento;
	}
	public void setDepartamento(char departamento) {
		this.departamento = departamento;
	}
	
	
	
	private Localidad localidad;	
	public Localidad getLocalidad() {
		return localidad;
	}
	public void setLocalidad(Localidad localidad) {
		this.localidad = localidad;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((calle == null) ? 0 : calle.hashCode());
		result = prime * result + departamento;
		result = prime * result
				+ ((localidad == null) ? 0 : localidad.hashCode());
		result = prime * result + numero;
		result = prime * result + piso;
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
		Direccion other = (Direccion) obj;
		if (calle == null) {
			if (other.calle != null)
				return false;
		} else if (!calle.equals(other.calle))
			return false;
		if (departamento != other.departamento)
			return false;
		if (localidad == null) {
			if (other.localidad != null)
				return false;
		} else if (!localidad.equals(other.localidad))
			return false;
		if (numero != other.numero)
			return false;
		if (piso != other.piso)
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Direccion [calle=" + calle + ", numero=" + numero + ", piso="
				+ piso + ", departamento=" + departamento + ", localidad="
				+ localidad + "]";
	}
}
