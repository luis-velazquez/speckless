import { useState } from "react";
import {
  FormLabel,
  FormControl,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  stories: "",
  city: "",
  phone: "",
  state: "",
  exterior: "",
};

const initState = { values: initValues };

export default function Contact() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    // The values come in from our state
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="bg-gray-900">
      <div className="text-center max-w-5xl mx-auto text-gray-400 ">
      <h3 className="text-3xl pt-20 font-extrabold text-gray-100">Contact Us</h3>
      <p className="m-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        veritatis, earum maiores impedit mollitia corrupti laborum accusantium
        quasi dolore facere eveniet soluta. 
      </p>
      <div className="mt-20 mx-4">
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <div className="flex flex-grid gap-2">
          {/* ------------------------------------------Name------------------------------ */}
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
            // w={350}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        </div>
        <div className="sm:flex sm:flex-grid sm:gap-2">
          {/* ------------------------------------------Email------------------------------ */}

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </FormControl>
          {/* ------------------------------------------Phone------------------------------ */}

          <FormControl
            isRequired
            isInvalid={touched.phone && !values.phone}
            mb={5}
          >
            <FormLabel>Phone</FormLabel>
            <Input
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </FormControl>
        </div>
        <div className="flex flex-grid gap-2">
          {/* ------------------------------------------Address------------------------------ */}

          <FormControl
            isRequired
            isInvalid={touched.subject && !values.subject}
            mb={5}
          >
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </FormControl>

          {/* ------------------------------------------City------------------------------ */}
          <div>
            <FormControl
              isRequired
              isInvalid={touched.city && !values.city}
              mb={5}
            >
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={onBlur}
              />
            </FormControl>
          </div>

          {/* ------------------------------------------State------------------------------ */}
          <div>
            <FormControl
              isRequired
              isInvalid={touched.state && !values.state}
              mb={5}
            >
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={onBlur}
              />
            </FormControl>
          </div>
        </div>

        <div className="flex flex-grid gap-2">
          {/* ------------------------------------------Stories------------------------------ */}
          <FormControl
            isRequired
            isInvalid={touched.stories && !values.stories}
            mb={5}
          >
            <FormLabel>How Many Stories?</FormLabel>
            <Input
              type="number"
              name="stories"
              value={values.stories}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </FormControl>
          {/* ------------------------------------------exterior------------------------------ */}
          <FormControl
            isRequired
            isInvalid={touched.exterior && !values.exterior}
            mb={5}
          >
            <FormLabel>Home Exterior Type</FormLabel>
            <Input
              type="text"
              name="exterior"
              value={values.exterior}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </FormControl>
        </div>

        {/* ------------------------------------------Message------------------------------ */}

        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
        >
          <FormLabel>Please Describe the services that you need:</FormLabel>
          <Textarea
            type="text"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
        </FormControl>

        <Button
          variant="outline"
          colorScheme="blue"
          isLoading={isLoading}
          disabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
    </div>
    
  );
}
