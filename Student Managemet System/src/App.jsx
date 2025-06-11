import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Auth
import Login from './pages/auth/Login';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageCourses from './pages/admin/ManageCourses';
import Reports from './pages/admin/Reports';
import AdminAnnouncements from './pages/admin/Announcements';

// Teacher Pages
import TeacherDashboard from './pages/teacher/Dashboard';
import MyCourses from './pages/teacher/MyCourses';
import Attendance from './pages/teacher/Attendance';
import GradeEntry from './pages/teacher/GradeEntry';
import TeacherAnnouncements from './pages/teacher/Announcements';

// Student Pages
import StudentDashboard from './pages/student/Dashboard';
import MyStudentCourses from './pages/student/MyCourses';
import MyGrades from './pages/student/MyGrades';
import AttendanceReport from './pages/student/AttendanceReport';
// import StudentAnnouncements from './pages/student/Announcements';

// Student Management Pages
import StudentList from './pages/students/StudentList';
import AddStudent from './pages/students/AddStudent';
import EditStudent from './pages/students/EditStudent';
import ViewStudent from './pages/students/ViewStudent';

// Private Route (to protect routes)
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute role="admin">
              <ManageUsers />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <PrivateRoute role="admin">
              <ManageCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <PrivateRoute role="admin">
              <Reports />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/announcements"
          element={
            <PrivateRoute role="admin">
              <AdminAnnouncements />
            </PrivateRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher/dashboard"
          element={
            <PrivateRoute role="teacher">
              <TeacherDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/courses"
          element={
            <PrivateRoute role="teacher">
              <MyCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/attendance"
          element={
            <PrivateRoute role="teacher">
              <Attendance />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/grades"
          element={
            <PrivateRoute role="teacher">
              <GradeEntry />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/announcements"
          element={
            <PrivateRoute role="teacher">
              <TeacherAnnouncements />
            </PrivateRoute>
          }
        />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <PrivateRoute role="student">
              <StudentDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/courses"
          element={
            <PrivateRoute role="student">
              <MyStudentCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/grades"
          element={
            <PrivateRoute role="student">
              <MyGrades />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/attendance"
          element={
            <PrivateRoute role="student">
              <AttendanceReport />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/student/announcements"
          element={
            <PrivateRoute role="student">
              <StudentAnnouncements />
            </PrivateRoute>
          }
        /> */}

        {/* Student Management (admin accessible) */}
        <Route
          path="/students"
          element={
            <PrivateRoute role="admin">
              <StudentList />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/add"
          element={
            <PrivateRoute role="admin">
              <AddStudent />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/edit/:id"
          element={
            <PrivateRoute role="admin">
              <EditStudent />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/view/:id"
          element={
            <PrivateRoute role="admin">
              <ViewStudent />
            </PrivateRoute>
          }
        />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
