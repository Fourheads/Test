package dom.escuela;

import java.util.Date;


public class Tarjeta {

	private int numerodeTarjeta;
	public int getNumerodeTarjeta() {
		return numerodeTarjeta;
	}
	public void setNumerodeTarjeta(int numerodeTarjeta) {
		this.numerodeTarjeta = numerodeTarjeta;
	}
	
	
	private Date fecha;
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	
	
	private String comentario;
	public String getComentario() {
		return comentario;
	}
	public void setComentario(String comentario) {
		this.comentario = comentario;
	}
	
	
	private String categoria;	
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + numerodeTarjeta;
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
		Tarjeta other = (Tarjeta) obj;
		if (numerodeTarjeta != other.numerodeTarjeta)
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Tarjeta [numerodeTarjeta=" + numerodeTarjeta + ", fecha="
				+ fecha + ", comentario=" + comentario + ", categoria="
				+ categoria + "]";
	}
}
