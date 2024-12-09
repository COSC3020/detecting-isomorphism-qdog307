# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## Analysis 


The runtime of the `are_isomorphic` function is dominated by the factorial growth of generating all permutations of \( |n| \) vertices, which has a complexity of \( O(|n|!) \). For each permutation, validating adjacency relations involves iterating over all vertex pairs, adding a cost of \( O(|n|^2) \). Thus, the overall worst-case runtime complexity simplifies to:

$$
O(|n|! \cdot |n|^2)
$$

This reflects the factorial growth of permutation generation combined with the quadratic cost of validation for each permutation. While computationally expensive, this brute-force approach avoids unnecessary overhead and is practical for small graphs.

## Sources

For the sources I used the graph lecture slides to help with runtime anaylsis. I looked up Graph Isomorphsim on geeksforgeeks. https://www.geeksforgeeks.org/tree-isomorphism-problem/. I took what I learned from the assigmnet of Isomorphism Nodes Connectivity and applied to this code. I ran into issues with my intial code and asked chatGPT for some tips. Pointed in the direction of a brute force like algorithm but did not take any code. I scrapped the whole initial setup and started over again. I stuck with the idea of brute force but I tried to simpifly the test code. I looked at Hrics12-1 and Will-Greiner to see that it was easier to just test my own graphs than generating them so that I for sure knew what the resulst were. The graphs are my own though just the idea. I got help with the actual run partion of the test code and implenting it. The permuations in the code.js was also something I had help frm chatGPT implementing. It is commented in the code. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

