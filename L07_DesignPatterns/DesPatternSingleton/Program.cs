using System;
using System.Collections.Generic;

namespace DesPatternSingleton
{

    public class Person
    {
        public string Name;
        public int Age;
        public int Id;

        public override string ToString()
        {
            return "Name:" + Name + ", Age: " + Age + ", " + "Id: " + Id;
        }
    }

    /*
    class GlobalVariables
    {
        // public static int letzteID = 1;
        public static IDGenerator DerIdMacher = new IDGenerator();
    }
    */

    public class IDGenerator
    {
        private IDGenerator()
        {
            letzteID = 1;
        }

        private static IDGenerator _instance;

        public static IDGenerator GetInstance()
        {
            if (_instance == null)
                _instance = new IDGenerator();
            return _instance;
        }

        private int letzteID;
        public int GibMirNeId()
        {
            return letzteID++;
        }
    } 

    class Program
    {

        static void Main(string[] args)
        {
            

            List<Person> personen = new List<Person>();

            // Eine Stelle, an der Personen angelegt werden
            personen.Add(new Person{ Name="Dieter", Age=44,     Id = IDGenerator.GetInstance().GibMirNeId()});
            personen.Add(new Person{ Name="Horst", Age=45,      Id = IDGenerator.GetInstance().GibMirNeId()});
            personen.Add(new Person{ Name="Walter", Age=33,     Id = IDGenerator.GetInstance().GibMirNeId()});
            personen.Add(new Person{ Name="Karl-Heinz", Age=22, Id = IDGenerator.GetInstance().GibMirNeId()});


            // Eine ANDERE Stelle, an der Personen angelegt werden
            personen.Add(new Person{ Name="Brunhilde", Age=56,    Id = IDGenerator.GetInstance().GibMirNeId()});
            personen.Add(new Person{ Name="Maria", Age=75,        Id = IDGenerator.GetInstance().GibMirNeId()});
            personen.Add(new Person{ Name="Kunigunde", Age=22,    Id = IDGenerator.GetInstance().GibMirNeId()});
            personen.Add(new Person{ Name="Tusnelda", Age=12,     Id = IDGenerator.GetInstance().GibMirNeId()});





            foreach (var person in personen)
                Console.WriteLine(person);

            Console.WriteLine("Hello World!");
        }
    }
}
