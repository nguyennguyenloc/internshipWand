using System;
using System.Collections.Generic;
using System.Data;
// using System.Data.EntityState.Modified;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; //entityState
using Microsoft.Extensions.Logging;
using ToDoApi.Models;

namespace ToDoApi.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class TodoItemsController : ControllerBase {

        private readonly TodoContext _context;
        private bool TodoItemExists (long id) => _context.TodoItems.Any (e => e.Id == id);

        private static TodoItemDTO ItemToDTO (TodoItem todoItem) =>
            new TodoItemDTO {
                Id = todoItem.Id,
                Name = todoItem.Name,
                IsComplete = todoItem.IsComplete
            };
        public TodoItemsController (TodoContext context) {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<TodoItemDTO>> CreateTodoItem (TodoItemDTO todoItemDTO) {
            var todoItem = new TodoItem {
                IsComplete = todoItemDTO.IsComplete,
                Name = todoItemDTO.Name
            };
            _context.TodoItems.Add (todoItem);
            await _context.SaveChangesAsync ();

            return CreatedAtAction (
                nameof (GetTodoItem),
                new { id = todoItem.Id },
                ItemToDTO (todoItem));
            // return CreatedAtAction ("GetTodoItem", new { id = todoItem.Id }, todoItem);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItemDTO>>> GetTodoItems () {
            return await _context.TodoItems
                .Select (x => ItemToDTO (x))
                .ToListAsync ();
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<TodoItemDTO>> GetTodoItem (long id) {
            var todoItem = await _context.TodoItems.FindAsync (id);
            if (todoItem == null) {
                return NotFound ();
            }
            return ItemToDTO (todoItem);
        }

        [HttpPut ("{id}")]
        public async Task<IActionResult> UpdateTodoItem (long id, TodoItemDTO todoItemDTO) {
            if (id != todoItemDTO.Id) {
                return BadRequest ();
            }

            var todoItem = await _context.TodoItems.FindAsync (id);
            if (todoItem == null) {
                return NotFound ();
            }
            todoItem.Name = todoItemDTO.Name;
            todoItem.IsComplete = todoItemDTO.IsComplete;

            // _context.Entry (todoItem).State = EntityState.Modified;
            try {
                await _context.SaveChangesAsync ();
            } catch (DbUpdateConcurrencyException)
            when (!TodoItemExists (id)) {
                return NotFound ();
            }
            return NoContent ();
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteTodoItem (long id) {
            var todoItem = await _context.TodoItems.FindAsync (id);
            if (todoItem == null) {
                return NotFound ();
            }
            _context.TodoItems.Remove (todoItem);
            await _context.SaveChangesAsync ();
            return NoContent ();
        }
    }
}