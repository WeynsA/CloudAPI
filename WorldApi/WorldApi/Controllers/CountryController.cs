using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorldApi.Model;

namespace WorldApi.Controllers
{
  [Route("api/[controller]")]
  public class CountryController : Controller
  {
    private readonly WorldContext db;

    public CountryController(WorldContext db)
    {
      this.db = db;
    }


    [HttpGet]
    public List<Country> GetAllCountries(string name, string sort = "continent", int length = 2, string dir = "asc", int? page = 0)
    {
      IQueryable<Country> query = db.Countries;

      if (!string.IsNullOrWhiteSpace(name))
        query = query.Where(c => c.Name == name);
;

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
          case "continent":
            if (dir == "asc")
              query = query.OrderBy(c => c.Continent);
            else
              query = query.OrderByDescending(c => c.Continent);
            break;
          case "code":
            if (dir == "asc")
              query = query.OrderBy(c => c.Code);
            else
              query = query.OrderByDescending(c => c.Code);
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

    // GET api/values/5
    [HttpGet("{id}")]
    public IActionResult GetCountryId(int id)
    {
      var country = db.Countries.Find(id);
      if (country == null)
        return NotFound();
      return Ok(country);
    }

    [HttpGet("n/{name}")]
    public IActionResult GetCountry(string name)
    {
      var country = db.Countries.Where(c => c.Name == name);
      if (country == null)
        return NotFound();

      return Ok(country);
    }

    // POST api/values
    [HttpPost]
    public IActionResult AddCountry([FromBody]Country newCountry)
    {
      db.Countries.Add(newCountry);
      db.SaveChanges();
      return Created("", newCountry);
    }

    // PUT api/values/5
    [HttpPut]
    public IActionResult UpdateCountry([FromBody]Country updateCountry)
    {
      var upCountry = db.Countries.Find(updateCountry.Id);
      if (upCountry == null)
        return NotFound();

      upCountry.Name = updateCountry.Name;
      upCountry.Code = updateCountry.Code;
      upCountry.Cities = updateCountry.Cities;
      upCountry.Continent = updateCountry.Continent;

      db.SaveChanges();
      return Ok(upCountry);
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public IActionResult DeleteCountry(int id)
    {
      var country = db.Countries.Find(id);
      if (country == null)
        return NotFound();

      db.Countries.Remove(country);
      db.SaveChanges();

      return NoContent();
    }
  }
}
