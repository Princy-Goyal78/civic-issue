import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  MapPin, 
  TrendingUp,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export function AdminHome() {
  const stats = {
    totalIssues: 1247,
    pendingIssues: 89,
    inProgressIssues: 156,
    resolvedIssues: 1002,
    avgResponseTime: 2.3,
    citizensActive: 3420
  };

  const recentIssues = [
    {
      id: 'CIV-2024-8789',
      title: 'Water logging on Brigade Road',
      category: 'Drainage',
      status: 'pending',
      priority: 'high',
      submittedTime: '2 hours ago',
      location: 'Brigade Road, Bangalore'
    },
    {
      id: 'CIV-2024-8788',
      title: 'Broken traffic signal at Silk Board',
      category: 'Traffic',
      status: 'in-progress',
      priority: 'high',
      submittedTime: '4 hours ago',
      location: 'Silk Board Junction, Bangalore'
    },
    {
      id: 'CIV-2024-8787',
      title: 'Street light not working in Koramangala',
      category: 'Electricity',
      status: 'pending',
      priority: 'medium',
      submittedTime: '6 hours ago',
      location: '5th Block, Koramangala'
    }
  ];

  const urgentAlerts = [
    {
      message: '15 high-priority issues pending for more than 48 hours',
      type: 'critical',
      count: 15
    },
    {
      message: '8 issues escalated to higher authorities today',
      type: 'warning',
      count: 8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Urgent Alerts */}
      {urgentAlerts.map((alert, index) => (
        <Card key={index} className={`${alert.type === 'critical' ? 'border-red-200 bg-red-50' : 'border-amber-200 bg-amber-50'}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className={`h-5 w-5 ${alert.type === 'critical' ? 'text-red-600' : 'text-amber-600'}`} />
              <span className={`flex-1 ${alert.type === 'critical' ? 'text-red-800' : 'text-amber-800'}`}>
                {alert.message}
              </span>
              <Badge variant="outline" className={alert.type === 'critical' ? 'border-red-200 text-red-700' : 'border-amber-200 text-amber-700'}>
                {alert.count}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="border-blue-200">
          <CardContent className="p-4 text-center">
            <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-blue-600 mb-1">{stats.totalIssues}</div>
            <div className="text-sm text-gray-600">Total Issues</div>
          </CardContent>
        </Card>
        
        <Card className="border-amber-200">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl text-amber-600 mb-1">{stats.pendingIssues}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-blue-600 mb-1">{stats.inProgressIssues}</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200">
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-green-600 mb-1">{stats.resolvedIssues}</div>
            <div className="text-sm text-gray-600">Resolved</div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-purple-600 mb-1">{stats.avgResponseTime}d</div>
            <div className="text-sm text-gray-600">Avg Response</div>
          </CardContent>
        </Card>
        
        <Card className="border-indigo-200">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-2xl text-indigo-600 mb-1">{stats.citizensActive}</div>
            <div className="text-sm text-gray-600">Active Citizens</div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Resolution Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">This Month</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-green-600">87%</span>
                  <ArrowUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">+5%</span>
                </div>
              </div>
              <Progress value={87} className="h-3" />
              <div className="text-xs text-gray-600">
                1,002 issues resolved out of 1,153 reported this month
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Average Response</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-blue-600">2.3 days</span>
                  <ArrowDown className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">-0.5d</span>
                </div>
              </div>
              <div className="text-xs text-gray-600">
                Improved by 18% compared to last month (2.8 days)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Issues */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-900 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Issues
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentIssues.map((issue) => (
              <div key={issue.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-green-900">{issue.title}</h4>
                    <Badge variant="outline" className={getPriorityColor(issue.priority)}>
                      {issue.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span>{issue.category}</span> • <span>{issue.location}</span> • <span>{issue.submittedTime}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">ID: {issue.id}</div>
                </div>
                <Badge variant="outline" className={getStatusColor(issue.status)}>
                  {issue.status.replace('-', ' ')}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}