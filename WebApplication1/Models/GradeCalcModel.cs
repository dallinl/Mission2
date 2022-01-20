using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class GradeCalcModel
    {
        [Required]
        public int Assignments { get; set; }
        public int Projects { get; set; }
        public int Quizzes { get; set; }
        public int Exams { get; set; }
        public int INTEX { get; set; }
    }
}
