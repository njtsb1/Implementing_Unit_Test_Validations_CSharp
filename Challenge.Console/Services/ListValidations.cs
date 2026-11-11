namespace Challenge.Console.Services
{
    public class ListValidations
    {
        public List<int> RemoveNegativeNumbers(List<int> list)
        {
            var listWithoutNegatives = list.Where(x => x > 0);
            return listWithoutNegatives.ToList();
        }

        public bool ListContainsSpecificNumber(List<int> list, int number)
        {
            var contains = list.Contains(number);
            return contains;
        }

        public List<int> MultiplyListNumbers(List<int> list, int number)
        {
            var multipliedList = list.Select(x => x * number).ToList();
            return multipliedList;
        }

        public int ReturnLargestNumberList(List<int> list)
        {
            return list.Max();
        }

        public int ReturnSmallestNumberList(List<int> list)
        {
            return list.Min();
        }
    }
}
