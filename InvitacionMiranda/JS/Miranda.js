
            function PrimerEstado(){
                document.getElementById('estilo').href='Estilos/MirandaEstilo.css';
                document.getElementById('seccion1D').innerHTML='CON ILUSION Y AMOR ESPERAMOS LA LLEGADA DE ';
                document.getElementById('seccion1D').id='seccion1'
                document.getElementById('seccion2D').innerHTML='MIRANDA ESPINDOLA GARCIA';
                 document.getElementById('seccion2D').id='seccion2';
                document.getElementById('seccion3D').innerHTML='POR ESO ESTAMOS ORGANIZANDO UN';
                document.getElementById('seccion3D').id='seccion3';                
            }

            function SegundoEstado(){
                document.getElementById('seccion1').innerHTML='BABY SHOWER';
                document.getElementById('seccion1').id='seccion1A';
                document.getElementById('seccion2').innerHTML='LLENO DE AMOR Y EN COMPAÑIA DE TODOS USTEDES';
                document.getElementById('seccion2').id='seccion2A';
                document.getElementById('seccion3').innerHTML='';
                document.getElementById('seccion3').id='seccion3A';
            }

            function TercerEstado(){
                document.getElementById('seccion1A').innerHTML='LA CITA ES ESTE';
                document.getElementById('seccion1A').id='seccion1B';
                document.getElementById('seccion2A').innerHTML='SABADO <b> 2 </b> ABRIL';
                document.getElementById('seccion2A').id='seccion2B';
                document.getElementById('seccion3A').innerHTML='A LAS 16:00 HRS';
                document.getElementById('seccion3A').id='seccion3B';
            }

            function CuartoEstado(){
                document.getElementById('seccion1B').innerHTML='TE ESPERAMOS EN LA';
                document.getElementById('seccion1B').id='seccion1C';
                document.getElementById('seccion2B').innerHTML="<a id='ref'>CASA DE LOS FUTUROS PADRES</a>";
                document.getElementById('ref').href='https://goo.gl/maps/mVccidXthSLS8kQR6';
                document.getElementById('seccion2B').id='seccion2C';
                document.getElementById('seccion3B').innerHTML='¡PARA UNA TARDE INOLVIDABLE!';
                document.getElementById('seccion3B').id='seccion3C';
            }

            function QuintoEstado(){
                document.getElementById('seccion1C').innerHTML='BABY SHOWER';
                document.getElementById('seccion1C').id='seccion1D';
                document.getElementById('seccion2C').innerHTML="MIRANDA ESPINDOLA";
                document.getElementById('seccion2C').id='seccion2D';
                document.getElementById('seccion3C').innerHTML='¡NO FALTES!';
                document.getElementById('seccion3C').id='seccion3D';
            }
            
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            async function cambios(){
                for (let i = 0; i >= 0; i++) {
                    await sleep(5000);
                    SegundoEstado();
                    await sleep(5000);
                    TercerEstado();
                    await sleep(5000);
                    CuartoEstado();
                    await sleep(5000);
                    QuintoEstado();
                    await sleep(5000);
                    PrimerEstado();
                }
            }
            cambios();