import { Button, Input, Menu, Grid, Card, Form, Checkbox, Alert, message, List, Avatar, Badge, ConfigProvider, Layout, Space, Row, Col, Comment, Divider, Select, Slider, InputNumber, Progress, Drawer, } from 'ant-design-vue';

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
  List,
  Avatar,
  Badge,
  ConfigProvider,
  Layout,
  Space,
  Row,
  Col,
  Comment,
  Divider,
  Select,
  Slider,
  InputNumber,
  Progress,
  Drawer,
];

export function setupAntd(app) {
  components.forEach(component => {
    app.use(component);
  });
}
