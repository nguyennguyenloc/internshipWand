using System;

namespace TestDebug {
    class Program {
        public static void Main (string[] args) {
            Console.WriteLine ("Hello World!");
            int n1 = Convert.ToInt32 (Console.ReadLine ());
            int n2 = Convert.ToInt32 (Console.ReadLine ());
            // int n1 = 5;
            // int n2 = 9;
            Console.WriteLine (cong (n1, n2));
        }
        public static int cong (int x, int y) {
            int z;
            z = x * y;
            return z;
        }
    }
}