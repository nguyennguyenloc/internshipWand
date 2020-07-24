using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoApi.Models;

namespace ToDoApi.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class HoController : ControllerBase {
        public IEnumerable<TodoItem> GetAll () {
            return new List<TodoItem> {
                new TodoItem {
                    Id = 1,
                        Name = "AAAAAA",
                        IsComplete = true
                    // ,
                    // Secret = "CCCCCC"
                },
                new TodoItem {
                    Id = 2,
                        Name = "AAAAAA",
                        IsComplete = true
                    // ,
                    // Secret = "CCCCCC"
                }
            };
        }
    }
}