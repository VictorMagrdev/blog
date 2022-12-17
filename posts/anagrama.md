---
title: anagrama
publish_date: 2022-12-17
---
---

extraido de : [mouredev/Code-Challenges: Retos de programación para mejorar nuestras habilidades (github.com)](https://github.com/mouredev/Code-Challenges)

---

Reto #1

¿ES UN ANAGRAMA?

Dificultad: MEDIA

Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
NO hace falta comprobar que ambas palabras existan.
Dos palabras exactamente iguales no son anagrama.

Challenge #1

IS IT AN ANAGRAM?

Difficulty: MEDIUM

Statement: Write a function that receives two words (String) and returns true or false (Boolean) depending on whether or not they are anagrams.
An Anagram consists of forming a word by rearranging ALL the letters of another initial word.
It is NOT necessary to check that both words exist.
Two exactly the same words are not an anagram.
package org.ANAGRAMA;

            import java.util.Arrays;

            public class Anagrama {
                public static void main(String[] args) {
                    boolean result = anagrama("roma", "amor");
                    System.out.println(result);
                }
                public static boolean anagrama(String palabra, String comparador) {
                    String first = palabra.toLowerCase();
                    String second = comparador.toLowerCase();
                    if(first.equals(second) || first.length() != second.length()){
                        return false;
                    }
                    int process = 0;
                    for(int i = 0; i < first.length(); i++){
                        for(int j = 0; j < first.length(); j++){
                            if(first.charAt(i) == second.charAt(j)){
                                process++;
                            }
                        }
                    }
                    if(process == first.length()){
                        return true;
                    } else {
                        return false;
                    }
                }
            }

[Link de mi github](https://github.com/VictorMagrdev)
