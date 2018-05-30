using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorldApi.Model
{
    public class DbInitializer
    {
        public static void Initialize(WorldContext context)
        {
            context.Database.EnsureCreated();
            if (!context.Cities.Any())
            {
                var italy = new Country()
                {
                    Name = "Italy",
                    Continent = "Europe",
                    Code = "IT"
                };

                var usa = new Country()
                {
                    Name = "United States of America",
                    Continent = "North-America",
                    Code = "USA"
                };

                var russia = new Country()
                {
                    Name = "Russia",
                    Continent = "Europe/Asia",
                    Code = "RUS"
                };

                var rome = new City()
                {
                    Name = "Rome",
                    Residents = "2,873 mil",
                    Area = "1285 km²",
                    Country = italy
                };

                var naples = new City()
                {
                    Name = "Naples",
                    Residents = "0.97 mil",
                    Area = "1171 km²",
                    Country = italy
                };

                var moskou = new City()
                {
                    Name = "Moskou",
                    Residents = "12,506 mil",
                    Area = "2511 km²",
                    Country = russia
                };

                var samara = new City()
                {
                    Name = "Samara",
                    Residents = "1.157 mil",
                    Area = "466 km²",
                    Country = russia
                };

                context.Countries.Add(italy);
                context.Countries.Add(usa);
                context.Countries.Add(russia);
                context.Cities.Add(samara);
                context.Cities.Add(naples);
                context.Cities.Add(moskou);
                context.Cities.Add(rome);

                context.SaveChanges();
            }
        }
    }
}
