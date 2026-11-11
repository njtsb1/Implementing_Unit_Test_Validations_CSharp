using Challenge.Console.Services;

namespace Challenge.Tests;

public class StringValidationsTests
{
    private readonly StringValidations _validations = new StringValidations();

    [Fact]
    public void ShouldReturnCountOf6ForWordMatrix()
    {
        // Arrange
        var text = "Matrix";
        var expectedResult = 6;

        // Act
        var result = _validations.ReturnCharacterCount(text);

        // Assert
        Assert.Equal(expectedResult, result);
    }

    [Fact]
    public void ShouldFindTheWordAnyInText()
    {
        // Arrange
        var text = "This is just some random text";
        var searchedText = "any";

        // Act
        var result = _validations.ContainsCharacter(text, searchedText);

        // Assert
        Assert.True(result);
    }

    [Fact]
    public void ShouldNotFindTheWordTestInText()
    {
        // Arrange
        var text = "This is just some random text";
        var searchedText = "test";

        // Act
        var result = _validations.ContainsCharacter(text, searchedText);

        // Assert
        Assert.False(result);
    }

    [Fact]
    public void TextShouldEndWithSearchedWord()
    {
        // Arrange
        var text = "Beginning, middle, and end of the searched text";
        var searchedText = "searched";

        // Act
        var result = _validations.TextEndsWith(text, searchedText);

        // Assert
        Assert.True(result);
    }
}
