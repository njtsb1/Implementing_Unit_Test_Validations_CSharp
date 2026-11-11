namespace Challenge.Console.Services
{
    public class StringValidations
    {
        public int ReturnCharacterCount(string text)
        {
            var characterNumber = text.Length;
            return characterNumber;
        }

        public bool ContainsCharacter(string text, string searchedText)
        {
            var contains = text.Contains(searchedText);
            return contains;
        }

        public bool TextEndsWith(string text, string searchedText)
        {
            var endsWith = text.EndsWith(searchedText);
            return endsWith;
        }
    }
}
