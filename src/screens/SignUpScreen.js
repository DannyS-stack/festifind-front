import React, { useState, useEffect } from "react";
import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import { Form } from "react-bootstrap";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  function submitForm(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(username);
    console.log(phone);
    console.log(name);
  }
  return (
    <View>
      <Text>LOGIN</Text>
      <TextInput
        placeholder="your name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        placeholder="username"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        placeholder="your email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        placeholder="password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <TextInput
        placeholder="phone"
        onChangeText={(text) => {
          setPhone(text);
        }}
      />

      <TouchableOpacity>
        <Button title="submit" onPress={(event) => submitForm(event)}>
          {" "}
        </Button>
      </TouchableOpacity>
    </View>
  );
}

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const token = useSelector(selectToken);
//   const history = useHistory();

//   useEffect(() => {
//     if (token !== null) {
//       history.push("/");
//     }
//   }, [token, history]);

//   function submitForm(event) {
//     console.log("submitted");
//     event.preventDefault();
//     setEmail("");
//     setPassword("");
//   }

//   return (
//     <Form>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }
