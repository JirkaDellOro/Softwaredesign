using System;
using System.Text.RegularExpressions;

namespace RegexExamples
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = "Hallo Ball";

            // Test 1:
            string pattern = "al";
            Console.Write("Found '" + pattern + "' in '" + text + " at " );
            foreach (Match match in Regex.Matches(text, pattern))
            {
                Console.Write(match.Index + ", ");
            }
            Console.WriteLine();
            Console.WriteLine();

            // Test 2:
            string pattern = "[al]";
            Console.Write("Found '" + pattern + "' in '" + text + " at " );
            foreach (Match match in Regex.Matches(text, pattern))
            {
                Console.Write(match.Index + ", ");
            }
            Console.WriteLine();
            Console.WriteLine();

            // Test 3:
            string replacedText = Regex.Replace(text, "all", "epp");
            Console.WriteLine(replacedText);
            Console.WriteLine();

            
        }
    }
}
