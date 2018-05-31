using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorldApi.Model;
using Microsoft.EntityFrameworkCore;

namespace WorldApi.Controllers
{
  [Route("api/[controller]")]
  public class CityController : Controller
  {
    private static List<City> list = new List<City>();
    private readonly WorldContext db;

    public CityController(WorldContext db)
    {
      this.db = db;
    }
    // GET api/city

    //[HttpGet]
    //public List<City> Get()
    //{
    //  return db.Cities.ToList();
    //}
    [HttpGet]
    public List<City> GetAllCities(string name, string residents, string sort = "area", int length = 2, string dir = "asc", int? page = 0)
    {
      IQueryable<City> query = db.Cities;

      if (!string.IsNullOrWhiteSpace(name))
        query = query.Where(c => c.Name == name);
      if (!string.IsNullOrWhiteSpace(residents))
        query = query.Where(c => c.Residents == residents);

      if (!string.IsNullOrWhiteSpace(sort))
      {
        switch (sort)
        {
          case "name":
            if (dir == "asc")
              query = query.OrderBy(c => c.Name);
            else
              query = query.OrderByDescending(c => c.Name);
            break;
          case "area":
            if (dir == "asc")
              query = query.OrderBy(c => c.Area);
            else
              query = query.OrderByDescending(c => c.Area);
            break;
          case "id":
            if (dir == "asc")
              query = query.OrderBy(c => c.Id);
            else
              query = query.OrderByDescending(c => c.Id);
            break;
        }


      }
      if (page.HasValue)
        query = query.Skip(page.Value * length);
      query = query.Take(length);

      return query.ToList();

    }


    [HttpGet("{id}")]
    public IActionResult GetCity(int id)
    {
      var city = db.Cities.Find(id);
      if (city == null)
        return NotFound();
      return Ok(city);
    }

    [HttpGet("n/{name}")]
    public IActionResult GetCity(string name)
    {
      var city = db.Cities.Where(c => c.Name == name);
      if (city == null)
        return NotFound();

      return Ok(city);
    }

    // POST api/city
    [HttpPost]
    public IActionResult CreateCity([FromBody] City newCity)
    {
      db.Cities.Add(newCity);
      db.SaveChanges();

      return Created("", newCity);
    }

    // PUT api/city/5
    [HttpPut]
    public IActionResult UpdateCity([FromBody] City updateCity)
    {
      var orgcity = db.Cities.Find(updateCity.Id);
      if (orgcity == null)
        return NotFound();

      orgcity.Name = updateCity.Name;
      orgcity.Residents = updateCity.Residents;
      orgcity.Area = updateCity.Area;
      orgcity.Country = updateCity.Country;

      db.SaveChanges();
      return Ok(orgcity);
    }

    // DELETE api/city/5
    [HttpDelete("{id}")]
    public IActionResult DeleteCity(int id)
    {
      var city = db.Cities.Find(id);
      if (city == null)
        return NotFound();

      db.Cities.Remove(city);
      db.SaveChanges();

      return NoContent();
    }


  }
}
