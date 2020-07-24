using System;
using System.Collections.Generic;
namespace todoapi.Models {
    public interface ITodoRepository {
        void Add (TodoItem todoItem);
        IEnumerable<TodoItem> GetAll ();
        TodoItem Find (String key);
        TodoItem Remove (String key);
        void Update (TodoItem item);
    }
}