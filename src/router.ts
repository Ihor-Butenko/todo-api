import { Router } from 'express'
import { body, oneOf } from 'express-validator'
import { handleErrors } from './modules/errors'
import { getAllWorkspaces, getWorkspace, createWorkspace, updateWorkspace, deleteWorkspace } from './handlers/workpace'
import { getAllWorkspaceMembers, getMember, addMember, removeMember } from './handlers/members' 
import { getAllDashboards, getSignleDashboard, createDashboard, updateDashboard, deleteDashboard } from './handlers/dashboard'
import { getAllTasks, getTask, createTask, updateTask, deleteTask } from './handlers/tasks'

const router = Router()

router.get('/workspaces', getAllWorkspaces, (req, res) => {})
router.get('/workspace/:id', getWorkspace, (req, res) => {})
router.post('/workspace', body('name').exists().isString(), handleErrors, createWorkspace, (req, res) => {})
router.put('/workspace/:id', body('name').exists().isString(), handleErrors, createWorkspace, updateWorkspace, (req, res) => {})
router.delete('/workspace/:id', deleteWorkspace, (req, res) => {})

router.get('/workspace/:workspaceId/members', getAllWorkspaceMembers, (req, res) => {})
router.get('/workspace/:workspaceId/member/:memberId', getMember, (req, res) => {})
router.post('/workspace/:workspaceId/member', body('id').exists().isString(), handleErrors, addMember, (req, res) => {})
router.delete('/workspace/:workspaceId/member/:id', body('id').exists().isString(), handleErrors, removeMember, (req, res) => {})

router.get('/workspace/:workspaceId/dashboards', getAllDashboards, (req, res) => {})
router.get('/workspace/:workspaceId/dashboard/:dashboardId', getSignleDashboard, (req, res) => {})
router.post('/workspace/:workspaceId/dashboard', body('name').exists().isString(), handleErrors, createDashboard, (req, res) => {})
router.put('/workspace/:workspaceId/dashboard/:id', body('name').exists().isString(), handleErrors, updateDashboard, (req, res) => {})
router.delete('/workspace/:workspaceId/dashboard/:id', deleteDashboard, (req, res) => {})

router.get('/workspace/:workspaceId/dashboard/dashboardId/tasks', getAllTasks, (res, req) => {})
router.get('/workspace/:workspaceId/dashboard/dashboardId/task/taskId', getTask, (res, req) => {})
router.post('/workspace/:workspaceId/dashboard/dashboardId/task', body('name').exists().isString(), handleErrors, createTask, (res, req) => {})
router.put('/workspace/:workspaceId/dashboard/dashboardId/task/taskId', body('name').exists().isString(), handleErrors, updateTask, (res, req) => {})
router.delete('/workspace/:workspaceId/dashboard/dashboardId/task/taskId', deleteTask, (res, req) => {})

export default router