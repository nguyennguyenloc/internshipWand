using System;
// using System.ComponentModel.DataAnnotations;

namespace ToDoApi.Models {
    public class TodoItem {
        public long Id { get; set; }

        // [Required]
        public string Name { get; set; }

        // [Required]
        public bool IsComplete { get; set; }

        // [Required]
        public string Secret { get; set; }
    }
}