import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import "./SubscribeForm.css";
const SubscribeForm = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  return (
    <div className="subscribe">
      <div className="subscribeform">
        <div className="title6">Get the Newsletter</div>
        <form
          className="form"
          action="https://www.locofy.ai"
          method="post"
          id="formID"
        >
          <TextField
            className="input"
            color="primary"
            variant="outlined"
            type="text"
            label="Email"
            placeholder="Email..."
            size="medium"
            margin="none"
            required
          />
          <Button
            className="button3"
            variant="contained"
            color="success"
            onClick={onButtonClick}
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
