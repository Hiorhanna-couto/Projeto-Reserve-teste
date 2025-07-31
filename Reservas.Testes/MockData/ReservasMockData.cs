using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reservas.Api.Models;

namespace Reservas.Testes.MockData
{
     public class ReservasMockData
    {
        public static List<Reserva> GetReservas()
        {
            return new List<Reserva>()
            {
                new Reserva{ ReservaId = 1 , Nome="Marcos", Iniciolocacao ="Sao Paulo",Fimlocacao ="Campinas"},
                new Reserva{ ReservaId = 2 , Nome="samanta", Iniciolocacao ="Sao Paulo",Fimlocacao =" campos do jordao"},
                new Reserva{ ReservaId = 3 , Nome="hoirhanna", Iniciolocacao ="Sao Paulo",Fimlocacao ="pindamonhangaba"},
            };

        }
    }
}
