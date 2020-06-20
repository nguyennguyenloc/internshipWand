using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class TodoController : Controller {
        private readonly TodoContext _context;

        public TodoController (TodoContext context) {
            _context = context;

            if (_context.TodoItems.Count () == 0) {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.TodoItems.Add (new TodoItem { Name = "Item1" });
                _context.SaveChanges ();
            }
        }

        // GET: api/Todo
        [HttpGet]
        public async Task<IActionResult> GetTodoItems () {
            // var listOfTodo = await _context.TodoItems.ToListAsync ();
            var todoItem = await _context.TodoItems.ToListAsync ();

            // return Json (listOfTodo);
            return Json (todoItem);

        }

        // GET: api/Todo/5
        //Kiểu trả về ngắn ngày không được nhập nội dung của method, mà trả về giá trị
        // [HttpGet ("{id}")]
        // public async Task > GetTodoItem (long id) {
        //     var todoItem = await _context.TodoItems.FindAsync (id);

        //     if (todoItem == null) {
        //         return NotFound ();
        //     }

        //     return todoItem;
        // }
    }
}