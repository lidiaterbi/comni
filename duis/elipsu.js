const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    // Perform your API request here
    setIsSubmitting(false);
  } catch (error) {
    // Handle the error
  }
};

// In your button component
<button disabled={isSubmitting}>Submit</button>
