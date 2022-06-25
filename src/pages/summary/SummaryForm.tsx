import { useState } from "react";

export const SummaryForm = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <form style={{ margin: "10px" }}>
      <fieldset style={{ margin: "10px 0" }}>
        <input
          id="terms"
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="terms">I agree to the Terms and Conditions</label>
      </fieldset>
      <button type="submit" disabled={!isChecked}>
        Confirm order
      </button>
    </form>
  );
};
