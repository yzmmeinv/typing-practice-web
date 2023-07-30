import { Button, Input, Menu, Grid, Card, Form, Checkbox, Alert } from 'ant-design-vue';

const components = [
    Button,
    Input,
    Menu,
    Grid,
    Card,
    Form,
    Checkbox,
    Alert,
]

export function setupAntd(app) {
    components.forEach(component => {
        app.use(component)
    })
}