import { MainLayout } from "@/layouts/MainLayout";
import { MiembroEquipo } from "@components/MiembroEquipo";

export const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="px-responsive flex flex-row flex-wrap justify-center">
        <MiembroEquipo
          src="https://media.discordapp.net/attachments/702600003998449805/1237297382585274388/william-animoji.png?ex=663b227b&is=6639d0fb&hm=44036546caf7c001ac1fd837d652a410633aa40df8f0df349de7fab22263691f&=&format=webp&quality=lossless&width=448&height=372"
          width={250}
          name="William Monroy"
          role="Role"
          className="m-1 max-w-44"
        />
        <MiembroEquipo
          src="https://media.discordapp.net/attachments/702600003998449805/1237297382585274388/william-animoji.png?ex=663b227b&is=6639d0fb&hm=44036546caf7c001ac1fd837d652a410633aa40df8f0df349de7fab22263691f&=&format=webp&quality=lossless&width=448&height=372"
          width={250}
          name="William Monroy"
          role="Role"
          className="m-1 max-w-44"
        />
        <MiembroEquipo
          src="https://media.discordapp.net/attachments/702600003998449805/1237297382585274388/william-animoji.png?ex=663b227b&is=6639d0fb&hm=44036546caf7c001ac1fd837d652a410633aa40df8f0df349de7fab22263691f&=&format=webp&quality=lossless&width=448&height=372"
          width={250}
          name="William Monroy"
          role="Role"
          className="m-1 max-w-44"
        />
        <MiembroEquipo
          src="https://media.discordapp.net/attachments/702600003998449805/1237297382585274388/william-animoji.png?ex=663b227b&is=6639d0fb&hm=44036546caf7c001ac1fd837d652a410633aa40df8f0df349de7fab22263691f&=&format=webp&quality=lossless&width=448&height=372"
          width={250}
          name="William Monroy"
          role="Role"
          className="m-1 max-w-44"
        />
      </div>
    </MainLayout>
  );
};
