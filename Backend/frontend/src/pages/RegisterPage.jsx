import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

function RegisterPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2xl font-bold">Registro</h3>
        <form>
          <Input placeholder="Ingrese su nombre: "></Input>
          <Input type="email" placeholder="Ingrese su email: "></Input>
          <Input type="password" placeholder="Ingrese su contraseña: "></Input>
          <Button>Registrarse</Button>
        </form>
      </Card>
    </div>
  );
}
export default RegisterPage;
