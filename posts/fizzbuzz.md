---
title: fizz buzz
publish_date: 2022-16-12
---
---

extraido de : [mouredev/Code-Challenges: Retos de programación para mejorar nuestras habilidades (github.com)](https://github.com/mouredev/Code-Challenges)

---

Reto #0
EL FAMOSO "FIZZ BUZZ"

Dificultad: FÁCIL
Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:

- Múltiplos de 3 por la palabra "fizz".
- Múltiplos de 5 por la palabra "buzz".
- Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

Challenge #0
THE FAMOUS "FIZZ BUZZ"

Difficulty: EASY
Statement: Write a program that outputs to the console (with a print) the numbers from 1 to 100 (both inclusive and with a line break between each print), substituting the following:

- Multiples of 3 for the word "fizz".
- Multiples of 5 for the word "buzz".
- Multiples of 3 and 5 at the same time for the word "fizzbuzz".

        package org.FIZZ_BUZZ;

        public class Fizz_Buzz {
            public static void main(String[] args) {

                for(int i = 0; i <= 100; i++) {
                    if (i % 3 == 0) {
                        System.out.println("fizz");
                    } else if (i % 5 == 0) {
                        System.out.println("buzz");
                    } else if (i % 3 == 0 && i % 5 == 0) {
                        System.out.println("fizzbuzz");
                    } else {
                        System.out.println(i);
                    }
                }
            }
        }

[Link de mi github](https://github.com/VictorMagrdev)
