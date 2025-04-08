function createChristmasTree() {
    const treeHeight = 10; // Number of layers (height of the tree)
    const maxStarsInBase = 15; // Maximum number of stars in the base layer

    // Loop through each layer to print the tree
    for (let i = 1; i <= treeHeight; i++) {
        const numStars = i * 2 - 1; // Number of stars in the current layer
        const spaces = ' '.repeat(treeHeight - i); // Calculate leading spaces to center the stars
        const stars = '*'.repeat(numStars); // Create the stars for the current layer
        
        console.log(spaces + stars); // Print the current layer of the tree
    }

    // Print the trunk of the tree
    const trunkWidth = 3; // Width of the trunk
    const trunkHeight = 3; // Height of the trunk
    const trunkSpaces = ' '.repeat(treeHeight - 2); // Center the trunk

    for (let i = 0; i < trunkHeight; i++) {
        console.log(trunkSpaces + '|'.repeat(trunkWidth)); // Print each trunk row
    }

    // Print the star at the top of the tree
    console.log(' '.repeat(treeHeight - 1) + '*');
}

// Call the function to display the Christmas tree in the console
createChristmasTree();
