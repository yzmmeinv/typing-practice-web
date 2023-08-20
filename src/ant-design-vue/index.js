import { Button, Input, Menu, Grid, Card, Form, Checkbox, Alert, message } from 'ant-design-vue';

const components = [
  Button,
  Input,
  Menu,
  Grid,
  Card,
  Form,
  Checkbox,
  Alert,
  message,
];

export function setupAntd(app) {
  components.forEach(component => {
    app.use(component);
  });
}
