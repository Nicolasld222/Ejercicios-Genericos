
interface Cita {
    paciente: string;
    doctor: string;
    fecha: string;
    hora: string;
    motivo: string;
}

class Agenda {
    private citas: Cita[] = [];

    agregar_cita(cita: Cita): void {
        this.citas.push(cita);
    }

    eliminar_cita(cita: Cita): void {
        this.citas = this.citas.filter(c => 
            c.paciente !== cita.paciente || c.doctor !== cita.doctor ||
            c.fecha !== cita.fecha || c.hora !== cita.hora || c.motivo !== cita.motivo
        );
    }

    buscar_cita(doctor: string): Cita[] {
        return this.citas.filter(cita => cita.doctor === doctor);
    }

    citas_hoy(): Cita[] {
        const hoy = new Date().toISOString().split('T')[0]; // Obtener solo la fecha en formato YYYY-MM-DD
        return this.citas.filter(cita => cita.fecha === hoy);
    }

    citas_fecha(fecha: string): Cita[] {
        return this.citas.filter(cita => cita.fecha === fecha);
    }

    
    mostrar_citas(): void {
        console.log(this.citas);
    }
}

const agenda = new Agenda();

const cita1: Cita = { paciente: "Juan Pérez", doctor: "Dr. Gómez", fecha: "2024-11-16", hora: "10:00", motivo: "Chequeo general" };
const cita2: Cita = { paciente: "María López", doctor: "Dr. Sánchez", fecha: "2024-11-16", hora: "11:00", motivo: "Consulta de seguimiento" };
const cita3: Cita = { paciente: "Carlos Díaz", doctor: "Dr. Gómez", fecha: "2024-11-17", hora: "14:00", motivo: "Revisión de resultados" };


agenda.mostrar_citas();


console.log("Citas del Dr. Gómez:");
console.log(agenda.buscar_cita("Dr. Gómez"));


console.log("Citas de hoy:");
console.log(agenda.citas_hoy());

console.log("Citas del 2024-11-16:");

console.log(agenda.citas_fecha("2024-11-16"));

agenda.eliminar_cita(cita1);

agenda.mostrar_citas();