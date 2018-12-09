import * as React from "react";
import { render } from "react-testing-library";

it('works?', () => {
    const { queryByRole } = render(<div />);
    expect(queryByRole("alertdialog")).toBeFalsy()
})
