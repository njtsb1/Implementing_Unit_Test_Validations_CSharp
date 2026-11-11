using Challenge.Console.Services;

namespace Challenge.Tests;

public class ListValidationsTests
{
    private readonly ListValidations _validations = new ListValidations();

    [Fact]
    public void ShouldRemoveNegativeNumbersFromAList()
    {
        // Arrange
        var list = new List<int> { 5, -1, -8, 9 };
        var expectedResult = new List<int> { 5, 9 };

        // Act
        var result = _validations.RemoveNegativeNumbers(list);

        // Assert
        Assert.Equal(expectedResult, result);
    }

    [Fact]
    public void ShouldFindNumber9InList()
    {
        // Arrange
        var list = new List<int> { 5, -1, -8, 9 };
        var numberToSearch = 9;

        // Act
        var result = _validations.ListContainsSpecificNumber(list, numberToSearch);

        // Assert
        Assert.True(result);
    }

    [Fact]
    public void ShouldNotFindNumber10InList()
    {
        // Arrange
        var list = new List<int> { 5, -1, -8, 9 };
        var numberToSearch = 10;

        // Act
        var result = _validations.ListContainsSpecificNumber(list, numberToSearch);

        // Assert
        Assert.False(result);
    }

    [Fact]
    public void ShouldMultiplyListElementsBy2()
    {
        // Arrange
        var list = new List<int> { 5, 7, 8, 9 };
        var expectedResult = new List<int> { 10, 14, 16, 18 };
        
        // Act
        var result = _validations.MultiplyListNumbers(list, 2);

        // Assert
        Assert.Equal(expectedResult, result);
    }

    [Fact]
    public void ShouldReturn9AsLargestNumberInList()
    {
        // Arrange
        var list = new List<int> { 5, -1, -8, 9 };

        // Act
        var result = _validations.ReturnLargestNumberList(list);

        // Assert
        Assert.Equal(9, result);
    }

    [Fact]
    public void ShouldReturnNegativeEightAsSmallestNumberInList()
    {
        // Arrange
        var list = new List<int> { 5, -1, -8, 9 };

        // Act
        var result = _validations.ReturnSmallestNumberList(list);

        // Assert
        Assert.Equal(-8, result);
    }
}
