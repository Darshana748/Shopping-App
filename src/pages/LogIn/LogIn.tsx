import React from "react";
import { loginStyles } from "./Login.styles";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Divider,
  Field,
  SearchBox,
  Text,
} from "@fluentui/react-components";
import { Google } from "@mui/icons-material";

export const LogIn = () => {
  const classes = loginStyles();
  const googleIcon =(
    <div style={{marginRight:'8px'}}>
        {/* <Google /> */}
    </div>
  )
  return (
    <div className={classes.login}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          header={
            <Text size={600} weight={"semibold"}>
              Welcome
            </Text>
          }
          description={
            <Text size={300} weight={"medium"}>
              Sign in to continue
            </Text>
          }
        />
        <div className={classes.cardBody}>
          <Field
            label="Enter your email"
            style={{ marginBottom: "12px" }}
            required
          >
            <SearchBox contentBefore={""} />
          </Field>
          <Field label="Enter your password" required>
            <SearchBox contentBefore={""} />
          </Field>
        </div>

        <CardFooter className={classes.cardFooter}>
          <Button appearance={"primary"}>Sign In</Button>
          <Divider>or</Divider>
          <Button icon={googleIcon} iconPosition={"before"} size={'large'}>
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
