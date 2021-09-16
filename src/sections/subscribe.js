/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx, Label } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

export default function Subscribe() {
  // // 1. Create a reference to the input so we can fetch/clear it's value.
  // const inputEl = useRef(null);
  // // 2. Hold a status in state to handle the response from our API.
  // const [status, setStatus] = useState({
  //   submitted: false,
  //   submitting: false,
  //   info: { error: false, msg: null },
  // });
  // const handleMailChimpResponse = (errorMsg, successMsg) => {
  //   if (errorMsg) {
  //     // 4. If there was an error, update the message in state.
  //     setStatus({
  //       info: { error: true, msg: errorMsg },
  //     });

  //     return;
  //   }

  //   // 5. Clear the input value and show a success message.
  //   setStatus({
  //     submitted: true,
  //     submitting: false,
  //     info: { error: false, msg: successMsg },
  //   });
  //   inputEl.current.value = '';
  // };

  // const handleSendGridResponse = (status, msg) => {
  //   if (status === 200) {
  //     // 5. Clear the input value and show a success message.
  //     setStatus({
  //       submitted: true,
  //       submitting: false,
  //       info: { error: false, msg: msg },
  //     });
  //     inputEl.current.value = '';
  //   } else {
  //     setStatus({
  //       info: { error: true, msg: msg },
  //     });
  //   }
  // };
  // const subscribe = async (e) => {
  //   e.preventDefault();
  //   setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

  //   // 3. Send a request to our API with the user's email address.
  //   const res = await fetch('/api/subscribe', {
  //     body: JSON.stringify({
  //       email: inputEl.current.value,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //   });
  //   //for mailChimp integration
  //   const { error } = await res.json();
  //   handleMailChimpResponse(
  //     error,
  //     'Success! 🎉 You are now subscribed to the newsletter.'
  //   );
  //   // For sendGrid integration
  //   const text = await res.text();
  //   handleSendGridResponse(res.status, text);
  // };
  return (
    <section>
      <Container>
        <Box sx={styles.contentBox} className="subscribe-box">
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              Join the waitlist
            </Heading>
            <Box sx={styles.contentWrapper} className="subcribe-box">
              <Box as="form" sx={styles.subscribe} onSubmit={() => true}>
                <Flex sx={styles.inputGroup}>
                  <Label htmlFor="email" variant="styles.srOnly">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="email-input"
                    placeholder="Enter Email address"
                  />
                  <Button variant="secondary">Subscribe</Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    textAlign: 'center',
    borderRadius: 30,
    pb: '300px',
    mt: 50,
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
      backgroundColor: 'white',
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
      backgroundColor: '#000',
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
};
