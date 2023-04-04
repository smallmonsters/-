```java
// https://www.codewars.com/kata/63d1bac72de941033dbf87ae/solutions
private static final Set<Integer> BASE = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));

 public static boolean validateByOther(int[][] board) {
    BiFunction<Integer, Integer, Integer>
            rows = (i, j) -> board[i][j],
            cols = (i, j) -> board[j][i],
            boxes = (i, j) -> board[i / 3 * 3 + j / 3][i % 3 * 3 + j % 3];

    return check(rows) && check(cols) && check(boxes);
  }


  private static boolean check(BiFunction<Integer, Integer, Integer> extract) {
    return IntStream.range(0, 9).boxed()
            .map(i -> IntStream.range(0, 9).boxed()
                    .map(j -> extract.apply(i, j))
                    .collect(Collectors.toSet()))
            .allMatch(set -> set.equals(BASE));
  }
```
