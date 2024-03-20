const productData = [
    {
      "name": "Exquisite Watches",
      "tagline": "Gold Luxury, Choose Us",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$499.00",
      "image_path": "Assets\\Group4.png",
      "ambient_color": "linear-gradient(to right, rgba(244, 167, 100, 1), rgba(255, 222, 194, 1))"
    },
    {
      "name": "Dainty Timepieces",
      "tagline": "Silver Luxury, Choose Us",
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$469.00",
      "image_path": "Assets\Group5.png",
      "ambient_color": "linear-gradient(to right, rgba(173, 176, 176, 1), rgba(225, 225, 225, 1))"

    },
    {
      "name": "Elegant Timepieces",
      "tagline": "Choose Luxury, Choose Us",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$529.00",
      "image_path": "Assets\Group6.png",
      "ambient_color": "linear-gradient(to right, rgba(48, 163, 87, 1), rgba(117, 227, 154, 1))"
    },
    {
      "name": "Refined Timepieces",
      "tagline": "Choose Luxury, Choose Us",
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$599.00",
      "image_path": "Assets\Group7.png",
      "ambient_color": "linear-gradient(to right,rgba(242, 79, 79, 1), rgba(255, 168, 149, 1)"
    }
  ]

  

  $(document).ready(function(){
    // Initialize slick slider
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        // Add event listener for afterChange event
        // This event triggers after a slide change
        // and updates the background accordingly
        afterChange: function(event, slick, currentSlide) {
            updateContent(currentSlide);
        }
    });

    const body = document.getElementById('body')


    // Function to update content based on current slide
    function updateContent(currentSlide) {
        // Ensure the slide index is within bounds
        if (currentSlide >= 0 && currentSlide < productData.length) {
            // Adjust currentSlide to match zero-based indexing
            let adjustedSlide = currentSlide + 1;
            // Get the product data for the current slide
            let product = productData[currentSlide];
            // Update the HTML content with the product data
            $('.heading h1').text(product.name);
            $('.hero-data p').text(product.description);
            $('.price-tag').text(product.price);
            // Set the ambient color of the body based on the product data
            $('body').css('background', product.ambient_color);
         
        }
    }

    // Call the updateContent function on page load to set the initial content
    let curr = 0;
    updateContent(curr);

    // Previous button functionality
    $('.slick-prev').click(function(){
        curr = (curr - 1 + productData.length) % productData.length; // Ensure curr stays within the range
        $('.slider').slick('slickPrev');
        updateContent(curr);
    });
    
    // Next button functionality
    $('.slick-next').click(function(){
        curr = (curr + 1) % productData.length; // Ensure curr stays within the range
        $('.slider').slick('slickNext');
        updateContent(curr);
    });
});

